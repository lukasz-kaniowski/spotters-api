# How to run

    $ npm install
    $ sails lift


# Tests

     $ grunt test:watch

# Documentation

Api documentation is in apiary http://docs.spotters.apiary.io/

# Model

## Mission

    {
      title,
      description,
      dueDate,
      duration,
      price
    }



Link to other resources:

* Mission has many MissionLocation

## MissionLocation

    {
      address,
      response,
      picture,
      user,
      status
    }

## Location

    {
      address
    }




