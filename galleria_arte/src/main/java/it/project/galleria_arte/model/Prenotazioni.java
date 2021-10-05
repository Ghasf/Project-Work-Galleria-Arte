package it.project.galleria_arte.model;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Date;

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
    private LocalDate dataInizio;

    @Temporal(TemporalType.DATE)
    @Column(name = "data_fine")
    private LocalDate dataFine;

    @JoinColumn(name = "id_anagrafica")
    @ManyToOne
    @JsonIgnoreProperties("prenotazioni")
    private Anagrafica anagrafica;

}
