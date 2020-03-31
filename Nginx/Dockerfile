FROM nginx:alpine

# Delete Default files
RUN rm /etc/nginx/conf.d/default.conf
RUN mkdir -p /var/www/something.com/

# Install amce.sh to issue SSL certificates
RUN apk add wget openssl
RUN wget -O - https://get.acme.sh | sh

COPY ../Angular/dist/* /var/www/something.com/
COPY ./election.conf /etc/nginx/conf.d/

# Issue a certificate
RUN /root/.acme.sh/acme.sh --issue --nginx \
        -d something.com \
        -d www.something.com \ 
        --keylength ec-256