using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GrpcGreeter.Models;

[Table("products")]
public class Product
{

    [Column("id")]
    public int Id { get; set; }

    [Column("product_name")]
    [Required]
    public string ProductName { get; set; }

    [Column("quantity")]
    public int Quantity { get; set; } = 0;

    [Column("created_at")]
    [DataType(DataType.DateTime)]
    public DateTime CreatedAt { get; set; } = DateTime.Now;

    [Column("updated_at")]
    [DataType(DataType.DateTime)]
    [MaxLength(255)]
    public DateTime UpdatedAt { get; set; } = DateTime.Now;
}