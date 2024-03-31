import { Table, Column, Model, PrimaryKey, Default, DataType, AutoIncrement } from 'sequelize-typescript';

@Table({
    tableName: 'articles',
    initialAutoIncrement: '0000'
})
export class Articles extends Model {
    @AutoIncrement
    @PrimaryKey
    @Column(DataType.INTEGER)
    id!: number;

    @Column
    name!: string;

    @Column(DataType.TEXT)
    content!: string;

    @Column
    createdAt!: Date;

    @Column
    updatedAt!: Date;
}