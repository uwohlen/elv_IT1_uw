using System.Data.SqlClient;
using System.Data;
using System.Text;
using Handleliste.Models;

namespace Handleliste.Data
{
    public class DALHandleElement
    {
        private readonly string? sqlConnection;

        public DALHandleElement()
        {
            //Using ConfigurationBuilder to get information from appsetting regarding the database connection
            this.sqlConnection = new ConfigurationBuilder().AddJsonFile("appsettings.json")
                .Build().GetSection("ConnectionStrings")["HandleListeContext"];
        }

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

    }
}
