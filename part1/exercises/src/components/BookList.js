export default function BookList() {
   let pageTitle = "Books I Read this Month";
   let book1 = "https://m.media-amazon.com/images/I/81XjALHfqkL._AC_UF1000,1000_QL80_.jpg";
   let book2 = "https://www.orbitbooks.net/wp-content/uploads/2021/08/Book-of-Gothel-FIN-scaled.jpg";
   let book3 = "https://img.ws.mms.shopee.ph/ph-11134207-7qul6-libadb4qa1r08b";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Quietly Hostile by Samantha Irby" />
         <img src={book2} alt="The Book of Gothel by Mary McMyne" />
         <img src={book3} alt="Fruiting Bodies by Kathryn Harlan" />
      </div>      
   );
}