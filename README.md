#Silkworm
A lightweight ravelry client built with metoer.

###Setup
1. Install Meteor
```
$ curl https://install.meteor.com | /bin/sh
```

2. clone project 
```
$ git clone git@github.com:amschrader/silkworm-meteor.git
```

3. download dependancies
```
$ cd silkworm-meteor
$ meteor run
```

### Ravelry Auth
create a file in the root directory called settings.json with your ravelry access key and secret
```
{
  "ravelryKey": "1234",
  "ravelrySecret": "abcd"
}
```

### Run Locally
```
$ meteor --settings settings.json
```