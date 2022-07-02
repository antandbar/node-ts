import TopicSchema  from './Topic';
import AddressSchema from './Address';
import PostSchema from './Post';


class Associations {
    public relations () {

        // Uno a uno
        //Añadir una clave foranea a la tabla adresses
        TopicSchema.hasOne(AddressSchema, {foreignKey: 'topicId' });

        //Añade una clave topicId a la tabla adresses
        AddressSchema.belongsTo(TopicSchema, {foreignKey: 'topicId' });

        //Uno a N
        // Topic va a tener mucho post
        // Se añade una clave topicId a la tabla posts
        TopicSchema.hasMany(PostSchema, {foreignKey: 'topicId' });
        // Se añade una clave topicId a la tabla posts
        PostSchema.belongsTo(TopicSchema, {foreignKey: 'topicId' });

    }

}

export default new Associations();

