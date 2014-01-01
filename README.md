dishwasher
==========

###If you like plates, you will love dishwasher.

This nice little plates add-on module suddenly evolved from fairy droppings.
Now, it's a full-blown dishwasher washing your plates (obviously, you need to
fill it with objects).

Read your templates folder:

    dishwasher.setFolder(folderwithyourtemplates, [cwd])

Rinse your plates:

    dishwasher.rinse(pageobject, arrayofobjects, mapsobject)

The mapsobject holds five plates mapping instances (the must be called pagemap,
singelmap, multimap, fragments and collections)

The `pageobject` can hold several optional data keys. At least it must have
two keys: mastertemplate and pagemultiset.
`mastertemplate` is the name of the template which plates should use to renderd
the page.
`pagemultiset` is an array of strings. dishwasher will search every object in
the `arrayofobjects` argument with which `rinse()` was called. If one or more
objects with the corresponding string are found they are considered a
collection.
Collections will always be renderd with a template of the same name from the
template folder.

`arrayofobjects` holds all the data you want to insert into the mastertemplate.
Each object should tell dishwasher via a `collection` key, which collections it
belongs to. If the object does not belong to a collection, it should tell
dishwasher like so `object.collection = 'none'`.

`pagemap` is a `plates.Map()` which tells dishwasher where and how the keys from
`pageobject` should be replaced/inserted.
`singlemap` and `multimap` will be used to append additional template partials
within your mastertemplate (this is useful if you want to render several
collections or lots of fragments and want to keep templates and partials
reusable).
`fragments` and `collections` do the same for objects with no collection and
collections in `arrayofobjects`.

If there are still a lot of question marks popping above your head have a look
at the tests.

ENJOY!
