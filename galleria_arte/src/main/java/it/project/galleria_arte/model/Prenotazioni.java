package it.project.galleria_arte.model;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import javax.persistence.*;
import java.time.LocalDate;
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

    @Temporal(TemporalType.DATE)
    @Column(name = "data_inizio")
    private Date dataInizio;

    @Temporal(TemporalType.DATE)
    @Column(name = "data_fine")
    private Date dataFine;

    @JoinColumn(name = "id_anagrafica")
    @ManyToOne
    @JsonIgnoreProperties("prenotazioni")
    private Anagrafica anagrafica;

    @ManyToMany(mappedBy = "prenotazioni", targetEntity = Sale.class)
    @JsonIgnoreProperties("prenotazioni")
    private List<Sale> sale;

}
