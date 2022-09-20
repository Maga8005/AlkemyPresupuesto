const db = require("../database/models");

const mainController = {
  home: (req, res) => {
    db.presupuesto.findAll().then((presupuesto) => {
      if (!presupuesto) {
        res.send("Error 404");
      } else {
        let ingreso = 0;
        let egreso = 0;
        for (i = 0; i < presupuesto.length; i++) {
          if (presupuesto[i].tipo == "Ingreso") {
            ingreso += presupuesto[i].monto;
          } else {
            egreso += presupuesto[i].monto;
          }
        }
        let balance = ingreso - egreso;
        return res.render("index", { presupuesto, balance });
      }
    });
  },

  formCrear: (req, res) => {
    return res.render("crear");
  },

  crear: (req, res) => {
    db.presupuesto
      .create({
        concepto: req.body.concepto,
        monto: req.body.monto,
        fecha: req.body.fecha,
        categoria: req.body.categoria,
        tipo: req.body.tipo,
      })
      .then(() => {
        return res.redirect("/");
      })
      .catch((error) => console.error(error));
  },

  formEditar: (req, res) => {
    db.presupuesto
      .findByPk(req.params.id)
      .then((entrada) => {
        return res.render("editar", { entrada, old: req.body });
      })
      .catch((error) => console.error(error));
  },

  editar: (req, res) => {
    db.presupuesto
      .update(
        {
          concepto: req.body.concepto,
          monto: req.body.monto,
          fecha: req.body.fecha,
          categoria: req.body.categoria,
          tipo: req.body.tipo,
        },
        {
          where: { id: req.params.id },
        }
      )
      .then(() => {
        return res.redirect("/lista");
      });
  },
  lista: (req, res) => {
    db.presupuesto.findAll().then((presupuesto) => {
      if (!presupuesto) {
        res.send("Error 404");
      } else {
        return res.render("lista", { presupuesto });
      }
    });
  },

  filtro:(req,res)=>{
    db.presupuesto.findAll(
      {
        // Se atrapan los datos con req.body.name
        where: { categoria: req.body.categoria, tipo: req.body.tipo }
      }
    )
    .then((presupuesto)=>{
      if (!presupuesto) {
        res.send("Error 404");
      }
      else {
        return res.render('lista', { presupuesto });
      }
    })
  },

  delete: (req, res) => {
    db.presupuesto
      .destroy({
        where: { id: req.params.id },
      })
      .then(() => {
        // res.send(presupuesto);
        return res.redirect('/lista');
      })

      .catch((err) => console.error(err));
  },
  api: (req, res) => {
    db.presupuesto.findAll()
        .then(entradas => res.status(200).json(entradas))
}
};

module.exports = mainController;
