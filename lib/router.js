FlowRouter.route('/home',{
name: 'hometemplate',
action(params,queryParams)
{
BlazeLayout.render('hello', {t1: 'home'});
}
});
FlowRouter.route('/about',{
name: 'hometemplate',
action(params,queryParams)
{
BlazeLayout.render('hello', {t2: 'about'});
}
});
