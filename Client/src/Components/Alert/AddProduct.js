import Swal from "sweetalert2"

export default function AddProductAlert() {
  return ( 
    Swal.fire({
        title:"Excelent!",
        text:'The product has been added to the cart',
        icon:'success',
        timer: 2000
    })
  )
}
