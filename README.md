# [Reuso Eco BR](http://reuso.eco.br/)

## For running it (on Ubuntu)
The requirements are having installed in your machine the following:
 + Git
 + Nginx (can be avoided, but instructions down bellow)
 + Docker

### Nginx configuration
<p>Notice that this project runs on port 7050. So, for not being required to input the ":7050" part on the URL, add the following configuration to tour "/etc/nginx/sites-available/default" file.</p>

<p><strong>ATENTION</strong>: change the server_name to your domain. If you are running on localhost, I think (bnot sude) you must set it the value "localhost" (without the quotation marks), but again, not sure.</p>

<p>Also, I have not set the SSL yet, so runs only on http (no <strong>s</strong>)</p>

```
# Docker Reuso Eco Br WWW
server {
        listen 80;
        server_name my.domain.com;

        location / {
                proxy_pass http://localhost:7050;
        }
}
```


### At last, run it and have phun!
<p>Download this repository, go to the project folder and run the following commands:</p>

<p>For making run.sh executable</p>

```bash
sudo chmod +x run.sh
```

<p>Then, finally this one for having phun! (creates a docker image and runs it into a container, among other things)</p>

```bash
./run.sh
```

<p>If you are a curious creature, and want to take a look inside of the Docker running container, <strong>YOU CAN!</strong></p>
<P>Go to the main project folder and run the following commands:</P>
<p>For making enter.sh executable</p>

```bash
sudo chmod +x run.sh
```

<p>To take a peek on the running project. Notice that the app is running on Nodemon, so any changes you do to the files will instantly "refresh" to the users.</p>

```bash
./enter.sh
```
