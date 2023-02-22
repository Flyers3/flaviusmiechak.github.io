import{ useSelector, useDispactch} from"react.redux";
import axios from"axios";
function Checkout() {
  const cart=useSellector((state)=>state.cart);
  const dispatch=useDispactch();
    const[fullname,SetFullName]=useState("");
    const[address,SetAddress]=useState("");
    const[city,SetCity]=useState("");
    const[phone,SetPhone]=useState("");
    const[paymentnumber,SetPaymentNumber]=useState("");
    const[ischecked,setIsChecked]=useState(true);
    const handleOrder=async()=> {
      if(fullname===""||address===""||city===""||phone==="") {
        toast.error("PLEASE FILL IN ALL FIELDS");
      } else {
        const cartItems=[];
        cart.forEach((Item)=>{cartItems.Push(item);};
    };
    const tokenurl="https://sandbox.momodeveloper.mtn.com/collection/token/";
    await axios
.post(tokenurl, {
  headers:{"content-type":"application/JSON",
  "X-REFERENCE-ID":"",
  "Ocp-Apim-Subscription-Key":"",}
});
.then((res)=> {
  console.log("token",res);
}
    const token="res.data.token";
    console.log(token);
    const paymenturl="https://sandbox.momodeveloper.mtn.com/v1_0/requesttopay";
    axios
.post(paymenturl,{
  amount:getTotal().totalPrice+shippingFee,
  currency:"EUR",
  externalId:"123456789",
  payer:{
    partyIdType:"MSISDN",
    partyId:+237{paymentnumber},},
    payermessage:        ,
    payNote:   ,
 ) },
 .then((res)=>{
   console.log("payment request",res);
   const paymentId=res data.paymentId,
   const paymenturl="https://sandbox.momodeveloper.mtn.com/v1_0/requesttopay"+paymentId;
   axios
.get(paymenturl)
.then(res)=>{
  console.log("payment request with Id",res);
  const response=axios.post("./api/v1/orders"; {
    cartItems,
    billaddress,
    shippingFee,
  });
  console.log(response);
  toas.success("
  dispatch (clearCart(0);
  .catch(error)=>{
    toast.error("failed");
    console.log(err);
    ");},
    <form method="post">
   <div className="row">
   <div className="col-md-6">
   <h3>Billing address</h3>
   <label htmlFor="fname"><i class="fafa-"></i>
  <input type=""id="" name=""value={} onchange={(e)=>set (e.target.value)} required/>
   
   <div className=""> 
   <div className="">
   <label htmlFor="fname"><i class="fafa-"></i>
  <input type=""id="" name=""value={} onchange={(e)=>set (e.target.value)} required/>
   
   <div className="row"> 
   <div className="col-50">
   <label htmlFor="fname"><i class="fafa-"></i>
  <input type="tel"id="" name=""value={} onchange={(e)=>set (e.target.value)} required/>
   
   <h3>momopay</h3>
   <div className="row">
   <div className="col-md-6">
   <label htmlFor="phonenumber"><i class="fafa-"></i>Phone number</label>
  <input type="tel"id="phone" name="phonebumber"value={phonenumber} onchange={(e)=>setPaynentNumber (e.target.value)} required/>
   
   
 <button type="submit"className="btn btn-primary" Onclick={(e)=>{e.preventDefault(); handleOrder();}}>place orde</button>
 </div> </div> </div> </div> </div>
 </form>);}
 export default checkout,
}
 }
}
    
}