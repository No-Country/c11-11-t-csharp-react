using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace back.Models;

public class Roles
{

    [Key]
    public int id { get; set; }

    [DisplayName("Nombre")]
    [Required(ErrorMessage ="introduce el nombre")]
    [Column(TypeName = "varchar(200)")]
    public string name { get; set; }

}
