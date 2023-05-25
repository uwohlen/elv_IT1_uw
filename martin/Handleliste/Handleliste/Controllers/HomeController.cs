using Handleliste.Models;
using Microsoft.AspNetCore.Mvc;
using Handleliste.Data;
using System.Diagnostics;

namespace Handleliste.Controllers
{
    //Controller kobler webserveren opp mot razor pages og modellene
    //Logikken på serversiden håndteres her
    public class HomeController : Controller
    {

        //Setter opp en DAL referanse for serveren.
        private readonly DALHandleElement dalHandleElement = new();

        //Funksjonen sender data fra Index siden og DAL 
        //Oppdaterer nettsiden også når et nytt element legges til
        public IActionResult Index(string inputName)
        {

            if (!string.IsNullOrEmpty(inputName))
            {
                HandleElement handleElement = new()
                {
                    Name = inputName,
                    IsChecked = false
                };

                dalHandleElement.AddElement(handleElement);
            }

            HandleElementViewModel handleElementViewModel = new HandleElementViewModel
            {
                HandleElementer = dalHandleElement.GetElements()
            };

            return View(handleElementViewModel);
        }

        //Oppdaterer nettsiden når et element er ferdig og sender det til DAL
        [Route("/Done")]
        public IActionResult Done(int id)
        {
            HandleElement handleElement = new()
            {
                Id = id,
                IsChecked = true
            };

            dalHandleElement.UpdateElement(handleElement);

            var handleElementViewModel = new HandleElementViewModel
            {
                HandleElementer = dalHandleElement.GetElements(),
            };

            return View("Index", handleElementViewModel);
        }

        //Laster inn restore siden og oppdaterer elementet hvis det legges til igjen
        [Route("/Restore")]
        public IActionResult Restore(int id)
        {
            HandleElement handleElement = new()
            {
                Id = id,
                IsChecked = false
            };

            dalHandleElement.UpdateElement(handleElement);

            var handleElementViewModel = new HandleElementViewModel
            {
                HandleElementer = dalHandleElement.GetElements(),
            };

            return View("Restore", handleElementViewModel);
        }


        //Sletter elementet fra nettsiden og sletter videre objektet fra databasen gjennom DAL
        [Route("/Delete")]
        public IActionResult Delete(int id)
        {
            HandleElement handleElement = new()
            {
                Id = id,
            };

            dalHandleElement.DeleteElement(handleElement);

            var handleElementViewModel = new HandleElementViewModel
            {
                HandleElementer = dalHandleElement.GetElements(),
            };

            return View("Restore", handleElementViewModel);
        }
    }
}