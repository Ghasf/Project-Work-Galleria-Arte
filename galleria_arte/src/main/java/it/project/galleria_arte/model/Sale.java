package it.project.galleria_arte.model;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

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

    @ManyToMany(targetEntity = Prenotazioni.class) //il nome deve essere lo stesso del nome che ho messo nella list della classe che sto collegando
    //LA JoinTable decido io da che lato devo farlo e devo inserirla solo una volta quando ho relazione molti a molti
    @JoinTable(name = "dettagli_prenotazione",
            joinColumns = @JoinColumn(name = "id_sale"),
            inverseJoinColumns = @JoinColumn(name = "id_prenotazione"))
    private List<Prenotazioni> prenotazioni;
}
