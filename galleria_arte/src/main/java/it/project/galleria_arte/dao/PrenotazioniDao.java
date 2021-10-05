package it.project.galleria_arte.dao;

import it.project.galleria_arte.model.Prenotazioni;
import it.project.galleria_arte.model.Sale;
import jdk.jfr.Registered;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
public class PrenotazioniDao {

    @Autowired
    private EntityManager entityManager; //prende le informazioni dal model e le traduce in query

    public List<Prenotazioni> getPrenotazioni(){
        Session currentSession = entityManager.unwrap(Session.class);
        return  currentSession.createQuery("FROM Prenotazioni", Prenotazioni.class).getResultList();
    }
}
