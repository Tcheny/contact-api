import express from 'express';
import Contact from '../model/Contact';

const router = express.Router();

router.post('/add', (req, res)=>{
  const newContact = new Contact(req.body);
  newContact.save(err=>{
    err ? res.send(err) : res.redirect('http://localhost:3000/')
  });
});

router.get('/', (req, res)=>{
  Contact.find((err, books)=>{
    err ? res.send(err) : res.send(books)
  });
});

router.get('/:id', (req, res)=>{
  Contact.findByIdAndRemove(req.params.id, (err)=>{
        err ? res.send(err) : res.redirect('http://localhost:3000')
    });
});

router.post('/update/:id', (req, res)=>{
  Contact.findByIdAndUpdate(req.params.id, req.body,(err)=>{
    err ? res.send(err) : res.redirect('http://localhost:3000')
  })
})

export default router;
