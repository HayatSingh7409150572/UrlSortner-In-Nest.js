import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity({ name: 'UrlStore' })

export class UrlShortnerEntity {
    

        @PrimaryGeneratedColumn()
        id?: Number;
      
        @Column()
        url?:string
     
}


