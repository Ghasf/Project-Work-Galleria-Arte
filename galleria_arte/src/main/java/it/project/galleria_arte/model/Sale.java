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

    @Column(name = "larghezza_parete_nord")
    private Double larghezzaPareteNord;

    @Column(name = "altezza_parete_nord")
    private Double altezzaPareteNord;

    @Column(name = "larghezza_parete_sud")
    private Double larghezzaPareteSud;

    @Column(name = "altezza_parete_sud")
    private Double altezzaPareteSud;

    @Column(name = "larghezza_parete_est")
    private Double larghezzaPareteEst;

    @Column(name = "altezza_parete_est")
    private Double altezzaPareteEst;

    @Column(name = "larghezza_parete_ovest")
    private Double larghezzaPareteOvest;

    @Column(name = "altezza_parete_ovest")
    private Double altezzaPareteOvest;

    @ManyToMany(targetEntity = Prenotazioni.class) //il nome deve essere lo stesso del nome che ho messo nella list della classe che sto collegando
    //LA JoinTable decido io da che lato devo farlo e devo inserirla solo una volta quando ho relazione molti a molti
    @JoinTable(name = "dettagli_prenotazione",
            joinColumns = @JoinColumn(name = "id_sale"),
            inverseJoinColumns = @JoinColumn(name = "id_prenotazione"))
    private List<Prenotazioni> prenotazioni;
}
