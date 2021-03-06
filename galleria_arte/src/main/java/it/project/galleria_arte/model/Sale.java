package it.project.galleria_arte.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Table(name = "sale")
public class Sale {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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

    @OneToMany(mappedBy = "sale")
    @JsonIgnore
    private List<Prenotazioni> prenotazioni;

    /*@ManyToMany(targetEntity = Prenotazioni.class)
    @JoinTable(name = "dettagli_prenotazione",
            joinColumns = @JoinColumn(name = "id_sala"),
            inverseJoinColumns = @JoinColumn(name = "id_prenotazione"))
    @JsonIgnoreProperties("sale")
    private List<Prenotazioni> prenotazioni;*/
}
