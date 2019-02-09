module.exports = function (sequelize, DataTypes) {
    var tasks = sequelize.define("tasks", {
        task_date: {
            type: DataTypes.STRING,
            allowNull: false,
            // len checks that our date is between 8 and 10 characters (2019-1-1 and 2019-10-10)
            validate: {
                len: [8, 10]
            }
        },
        task_minutes: {
            type: DataTypes.SMALLINT,
            allowNull: false,
        },
        task_category: {
            type: DataTypes.STRING,
            allowNull: false
        },
        task_goal: {
            type: DataTypes.SMALLINT,
            allowNull: false
        }
    });

    return tasks;
};