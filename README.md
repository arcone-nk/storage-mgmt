# Simple Storage Manager

[![CircleCI](https://circleci.com/gh/arcone-nk/storage-mgmt/tree/master.svg?style=svg)](https://circleci.com/gh/arcone-nk/storage-mgmt/tree/master)

Simple HTML5 storage management (local storage and session storage)

## install

```bash
$ npm install --save storage-mgmt
# or
$ yarn add storage-mgmt
```

## Usage

```javascript
// use local storage
import { strLocal } from 'storage-mgmt'

// storage set
strLocal.set('data', { a: 2 })

// storage get
strLocal.get('data')

//--------//

// use session storage
import { strSession } from 'storage-mgmt'

// storage set
strSession.set('data', [1, 2, 3])

// storage get
strSession.get('data')
```

## Methods

### strLocal.set(key, val) | strSession.set(key, val)

data save or overwrite.

#### Params

**key**  
Type: `string`  
storage key

**val**  
Type: `boolean | string | number | object<string, string | number | boolean> | Array<Array<string | number | boolean>>`  
 save or overwrite data.

#### Return

`this`

#### example

```javascript
import { strLocal } from 'storage-mgmt'

strLocal.set('flg', true)

// pipe
strLocal.set('data', { foo: 'bar' }).set('sum', 10)
```

### strLocal.get(key) | strSession.get(key)

read storage data.

#### Params

**key**  
Type: `string`  
storage key

#### Return

`boolean | string | number | object<string, string | number | boolean> | Array<Array<string | number | boolean>> | null`

#### example

```javascript
import { strLocal } from 'storage-mgmt'

strLocal.set('flg', true)

const flg = strLocal.get('flg') // -> true
const data = strLocal.get('data') // -> null
```

### strLocal.remove(key) | strSession.remove(key)

delete specific data.

#### Params

**key**  
Type: `string`  
storage key

#### Return

`this`

#### example

```javascript
import { strLocal } from 'storage-mgmt'

strLocal.set('flg', true)

strLocal.remove('flg')
const flg = strLocal.get('flg') // -> null

// pipe

strLocal.set('data', {foo: 'bar'}).remove('data').set('flg', true)
const data = strLocal.get('data') // -> null
```

### strLocal.clear() | strSession.clear()

storage all delete.  
Note that even necessary data may be deleted.



