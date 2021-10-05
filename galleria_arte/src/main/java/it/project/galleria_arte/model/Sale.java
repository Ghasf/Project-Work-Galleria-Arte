package it.project.galleria_arte.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "sale")
public class Sale {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_sala")
    private Integer idsala;

    @Column(name = "nome")
    private String nome;

    @Column(name = "dimensione")
    private String dimensione;
}
