package com.advertapp.example.advertapp.repositories;
import com.advertapp.example.advertapp.models.Advert;
import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.List;

public class AdvertRepositoryImpl {

    @Autowired
    EntityManager entityManager;

    @Transactional
    public List<Advert> findAdvertsThatHaveCategoryNamed(String categoryName) {
        List<Advert> result = null;
        Session session = entityManager.unwrap(Session.class);
        try{
            Criteria cr = session.createCriteria(Advert.class);
            cr.createAlias("categories", "categoryAlias");
            cr.add(Restrictions.eq("categoryAlias.categoryName", categoryName));
            result = cr.list();
        }
        catch (HibernateException ex) {
            ex.printStackTrace();;
        }

        return result;
    }

}
