var Empoyees = sequelize.define('Employee', {
		// we save a primary id as an auto-incrementing int.
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		// the only other field is the manager's full name
		fullName: {
			type: DataTypes.STRING
		}
		title: {
			type: DataTypes.STRING
		}
		address: {
			type: DataTypes.STRING
		}

		phone_number: {
			type: DataTypes.INTEGER
		}

	}, {
		classMethods: {
			// OUR hasOne() RELATION
			// ======================
			// associate gets called within index.js,
			// and mergers this model with models.Store
      associate: function(models) {
      	Manager.hasOne(models.Store);
      	Manager.hasOne(models.Uniform);
      }
    }
  })