My options....

Have two separate databases 
    one that holds the images and one that holds the text information
    benefit: do two separate post requests. Do not have to figure out how to handle multiple data types in one request
    downsides: two separate get requests, need to link two databases so appropriate image is fetched. 


Have one database that holds all of it 
    benefit: less to manage, better organized 
    downsides: do not know how to submit multiple data types to the database