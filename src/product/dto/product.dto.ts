/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
// aquí se definirá los que se envia entre el cliente y el servidor
export class CreateProductDTO {
   readonly name: string;
   readonly brand: string;
   readonly description: string;
   readonly imageURL: string;
   readonly price: number;
   readonly createdAt: Date;

}
