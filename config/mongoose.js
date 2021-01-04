import { connect } from 'mongoose';

connect('mongodb+srv://admin:admin@cluster0.vazzu.mongodb.net/online_payment?retryWrites=true&w=majority', {useNewUrlParser:true} );

export default {mongoose}