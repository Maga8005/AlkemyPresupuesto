module.exports = (sequelize, dataTypes) => {
  let alias = "presupuesto";
  let cols = {
    id:{
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    concepto:{
      type: dataTypes.STRING(200),
      allowNull: false,
    },
    monto:{
      type: dataTypes.INTEGER,
      allowNull: false,
    },
    fecha:{
      type: dataTypes.DATE,
      allowNull: false,
    },
    tipo:{
      type: dataTypes.STRING(100),
      allowNull: false,
    },
    categoria:{
      type: dataTypes.STRING(100),
      allowNull: false,
    }
  }
  let config = {
    tableName: "presupuesto",
    timestamps: false,
  }

  const presupuesto = sequelize.define(alias, cols, config);
  return presupuesto;
}