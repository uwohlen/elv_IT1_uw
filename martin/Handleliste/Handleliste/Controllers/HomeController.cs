using Handleliste.Models;
using Microsoft.AspNetCore.Mvc;
using Handleliste.Data;
using System.Diagnostics;

namespace Handleliste.Controllers
{
    public class HomeController : Controller
    {
        private readonly DALHandleElement dalHandleElement = new();
        private static int ID = 1;
        public IActionResult Index(string inputName)
        {

            if (!string.IsNullOrEmpty(inputName))
            {
                HandleElement handleElement = new()
                {
                    Id = ID++,
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
    }
}