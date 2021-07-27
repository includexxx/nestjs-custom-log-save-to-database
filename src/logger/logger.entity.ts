import { Entity, Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('sys_logs')
export class SysLog {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    message: string;

    @Column({ nullable: true })
    trace: string;

    @Column({ nullable: true })
    context: string;


}
