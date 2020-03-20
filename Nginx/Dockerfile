FROM nginx:alpine

# Delete Default files
RUN rm /etc/nginx/conf.d/default.conf
RUN rm /etc/nginx/conf.d/examplessl.conf

RUN mkdir -p /var/www/something.com/

# ? Do I need to make these directories
# These directories are supposed to be for SSL certificates
RUN mkdir -p /etc/letsencrypt
RUN /var/www/certbot

COPY ../Angular/dist/* /var/www/something.com/
COPY ./nginx.conf /etc/nginx/

