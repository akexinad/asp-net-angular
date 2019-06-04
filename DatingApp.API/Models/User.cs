namespace DatingApp.API.Models
{
    public class User
    {
        public User(int id, string username)
        {
            this.Id = id;
            this.Username = username;
        }
        public int Id { get; set; }
        public string Username { get; set; }

        // We need to install the password as a password hash and password salt in the form of a 'byte array'.
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
    }
}