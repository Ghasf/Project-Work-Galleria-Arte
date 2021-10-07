package it.project.galleria_arte.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Table(name = "anagrafica")
public class Anagrafica {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_anagrafica")
    private Integer idAnagrafica;

    @Column(name = "nominativo")
    private String nominativo;

    @Column(name = "indirizzo")
    private String indirizzo;

    @Column(name = "cap")
    private String cap;

    @Column(name = "localita")
    private String localita;

    @Column(name = "provincia")
    private String provincia;

    @Column(name = "codicefiscale")
    private String codiceFiscale;

    @Column(name = "partita_iva")
    private String partitaIva;

    @Column(name = "email")
    private String email;

    @Column(name = "password")
    private String password;

    @Column(name = "sito_web")
    private String sitoWeb;

    @OneToMany(mappedBy = "anagrafica")
    @JsonIgnore //serve per far vedere solo l'anagrafica nascondento i risultati delle foreign key
    private List<Prenotazioni> prenotazioni;
}
