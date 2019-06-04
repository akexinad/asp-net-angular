using System.Threading.Tasks;
using DatingApp.API.Models;

namespace DatingApp.API.Data
{
    public interface IAuthRepository
    {
        // User has to first be registered.
        Task<User> Register(User user, string password);

        // Then user needs to be logged in.
        Task<User> Login(string username, string password);

        // Check if the user already exists in the database to avoid duplicates.
        Task<bool> UserExists(string username);
    }
}