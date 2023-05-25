using System.Data.SqlClient;
using System.Data;
using System.Text;
using Handleliste.Models;

namespace Handleliste.Data
{

    //Data access layer (DAL) håndterer komunikasjon mellom server og database
    //(Databasen er satt opp med lagrede prosedyrer i MsSQL Server)
    public class DALHandleElement
    {
        private readonly string? sqlConnection;

        //Setter opp en tilkobling til sql serveren ved å hente informasjonen fra appsettings
        public DALHandleElement()
        {
            this.sqlConnection = new ConfigurationBuilder().AddJsonFile("appsettings.json")
                .Build().GetSection("ConnectionStrings")["HandleListeContext"];
        }

        //Legger til elementer i databasen
        public bool AddElement(HandleElement obj)
        {

            SqlConnection? connection = new(sqlConnection);
            SqlCommand command = new("AddElement", connection)
            {
                CommandType = CommandType.StoredProcedure
            };

            command.Parameters.AddWithValue("@Name", obj.Name);
            command.Parameters.AddWithValue("@IsChecked", obj.IsChecked);

            connection.Open();

            int i = command.ExecuteNonQuery();

            connection.Close();
            if (i >= 1)
                return true;
            else
                return false;
        }

        //Henter alle elementer i databasen
        public List<HandleElement> GetElements()
        {
            List<HandleElement> responseList = new();
            
            SqlConnection? connection = new(sqlConnection);
            SqlCommand com = new("GetElements", connection)
            {
                CommandType = CommandType.StoredProcedure
            };

            connection.Open();

            SqlDataReader reader = com.ExecuteReader();

            while (reader.Read())
            {
                HandleElement handleElement = new()
                {
                    Id = (int)reader[0],
                    Name = reader[1].ToString(),
                };

                if (reader[2].ToString() == "1")
                    handleElement.IsChecked = true;
                else
                    handleElement.IsChecked = false;

                responseList.Add(handleElement);
            }
            reader.Close();

            return responseList;
        }

        //Oppdaterer elementet når det blir sjekket av som ferdig og motsatt
        public bool UpdateElement(HandleElement obj)
        {
            SqlConnection? connection = new(sqlConnection);
            SqlCommand command = new("UpdateElement", connection)
            {
                CommandType = CommandType.StoredProcedure
            };

            command.Parameters.AddWithValue("@Id", obj.Id);
            command.Parameters.AddWithValue("@IsChecked", obj.IsChecked);

            connection.Open();

            int i = command.ExecuteNonQuery();

            connection.Close();
            if (i >= 1)
                return true;
            else
                return false;
        }

        //Sletter elementet fra databasen og oppdaterer index verdiene til elementene
        public bool DeleteElement(HandleElement obj)
        {
            SqlConnection? connection = new(sqlConnection);
            SqlCommand command = new("DeleteElement", connection)
            {
                CommandType = CommandType.StoredProcedure
            };

            command.Parameters.AddWithValue("@Id", obj.Id);
            
            connection.Open();

            int i = command.ExecuteNonQuery();

            if (i >= 1)
            {
                SqlCommand resetCommand = new("ResetIdCounter", connection)
                {
                    CommandType = CommandType.StoredProcedure
                };
                
                i = resetCommand.ExecuteNonQuery();

                connection.Close();

                return true;
            }
            else
            {
                connection.Close();
                return false;
            }
            
        }

    }
}
