package it.project.galleria_arte.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "opere")
public class Opere {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_opera")
    private Integer idOpera;

    @Column(name = "titolo")
    private String titolo;

    @Column(name = "descrizione")
    private String descrizione;

    @Column(name = "misura_larghezza")
    private Double misuraLarghezza;

    @Column(name = "misura_altezza")
    private Double misuraAltezza;

    @Column(name = "tecnica")
    private String tecnica;

    @JoinColumn(name = "id_tipo_opera")
    @ManyToOne
    @JsonIgnoreProperties("opere")
    private TipoOpere tipoOpere;
}
