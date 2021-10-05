package it.project.galleria_arte.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "pareti")
public class Pareti {
    @Id@GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_pareti")
    private Integer idPareti;

    @Column(name = "descrizione")
    private String descrizione;

    @Column(name = "misura_larghezza")
    private Double misuraLarghezza;

    @Column(name = "misura_altezza")
    private Double misuraAltezza;

}
