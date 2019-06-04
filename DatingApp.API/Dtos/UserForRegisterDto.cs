using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.Dtos
{
    public class UserForRegisterDto
    {   
        // Data Validations
        // The required tag is to ensure that no empty strings are passed for both username and password
        [Required]
        public string Username { get; set; }

        [Required]
        [StringLength(8, MinimumLength = 4, ErrorMessage = "You must specify password between 4 and 8 characters!")]
        public string Password { get; set; }
    }
}