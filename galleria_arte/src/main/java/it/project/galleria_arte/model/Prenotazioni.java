package it.project.galleria_arte.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Data
@Entity
@Table(name = "prenotazioni")
public class Prenotazioni {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_prenotazione")
    private Integer idPrenotazione;

    @Column(name = "descrizione")
    private String  descrizione;

    @Column(name = "data_inizio")
    private Date dataInizio;

    @Column(name = "data_fine")
    private Date dataFine;

    @JoinColumn(name = "id_anagrafica")
    @ManyToOne
    @JsonIgnoreProperties("prenotazioni")
    @JsonIgnore
    private Anagrafica anagrafica;

    @ManyToMany(mappedBy = "prenotazioni", targetEntity = Sale.class)
    @JsonIgnoreProperties("prenotazioni")
    private List<Sale> sale;

}
