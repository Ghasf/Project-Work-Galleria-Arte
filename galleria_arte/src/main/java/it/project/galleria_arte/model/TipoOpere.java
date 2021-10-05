package it.project.galleria_arte.model;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Table(name = "tipo_opere")
public class TipoOpere {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_tipo_opere")
    private Integer idTipoOpere;

    @Column(name = "descrizione")
    private String descrizione;

    @OneToMany(mappedBy = "tipo_opere")
    private List<Opere> opere ;

}
