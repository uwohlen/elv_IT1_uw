//Konfigurer webserveren
//Webserveren er også ansvarlig for å håndtere alt rundt nettsiden

WebApplicationBuilder builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllersWithViews();

WebApplication app = builder.Build();


if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
}


app.UseStatusCodePagesWithRedirects("/Error");

app.UseStaticFiles();

//Ruting kobler forespørsler fra brukeren til rettkontroller og metode
//Det kan brukes til å blant annet endre sti når nettsiden lastes
app.UseRouting();


app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
