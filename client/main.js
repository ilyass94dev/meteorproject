import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './main.html';
import {people} from '../Collections/people.js';

Template.home.onCreated(function helloOnCreated() {
  // counter starts at 0
  let test="here";
  console.log('Page loaded');
  this.counter = new ReactiveVar(0);
  this.test="haha";
});
Template.home.helpers({
  counter()
  {
    return Template.instance().counter.get();
  },
  test:function(){
    return "test";
  },
  people:function()
    {
      return people.find();
    },
  test:function()
   {
      return Template.instance().test.get();
   },
});
Template.home.events({
    'click button'(event, instance) {
    // increment the counter when button is clicked
    Template.instance().counter.set(Template.instance().counter.get()+1);
    let int=(Template.instance().counter.get());
    people.insert({"id":15,"name":"ilyass ben"});
    console.log(int);
  },
  'submit .deleteone'(event)
   {
    event.preventDefault();
    console.log(event.target.id.value);
    let id=event.target.id.value;
    people.remove(id);
   }
});
