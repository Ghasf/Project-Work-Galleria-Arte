package it.project.galleria_arte.dao;

import it.project.galleria_arte.model.Anagrafica;
import it.project.galleria_arte.model.Prenotazioni;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.Date;
import java.util.List;

@Repository
public class AnagraficaDao {

    @Autowired
    private EntityManager entityManager; //prende le informazioni dal model e le traduce in query

    public List<Anagrafica> getAnagrafica(){
        Session currentSession = entityManager.unwrap(Session.class);
        return  currentSession.createQuery("FROM Anagrafica", Anagrafica.class).getResultList();
    }

    public Anagrafica getAnagraficaById(Integer id){
        Session currentSession = entityManager.unwrap(Session.class);
        return currentSession.find(Anagrafica.class, id);
    }
}
