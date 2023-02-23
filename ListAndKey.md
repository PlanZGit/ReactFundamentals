# List and Key

Key are not accessible. <br>

## Unique id as key:

Key help React idenitfied elements that are added or removed or updated in the list.

    persons = [{id: 1, name: 's', age: 30}, {id: 2, name: 'x', age: 43}]

    const nameList = persons.map(person => <h2 key={id}>{person.name}</h2>)
    return <div>{nameList}</div>

## Index as key:

What happens if the element don't have a id for the key? <br>

    const persons = ['a','b','c','a']
    const nameList = persons.map((person,index) => <h2 key={index}>{person}</h2>)
    return <div>{nameList}</div>

IMPORTANT: Index as key cause problem when adding new item at the start of the list or sorting. The issue is the values are kept in order even when we sort them or add.

Reason why people use index as a key:

1. The items in list fo not have a unique id.
2. The list is static list and will not change.
3. The list will never be reorder or filtered.
