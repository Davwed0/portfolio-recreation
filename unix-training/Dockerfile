FROM ubuntu:22.04

# Install necessary packages
RUN apt-get update && apt-get install -y \
    openssh-server \
    sudo \
    man-db \
    manpages-posix \
    vim \
    nano \
    less \
    gzip \
    bzip2 \
    tar \
    p7zip-full \
    unrar \
    xxd \
    cron \
    && rm -rf /var/lib/apt/lists/*

# Set up SSH
RUN mkdir /var/run/sshd
RUN sed -i 's/#PermitRootLogin prohibit-password/PermitRootLogin no/' /etc/ssh/sshd_config
RUN sed -i 's/#PasswordAuthentication yes/PasswordAuthentication yes/' /etc/ssh/sshd_config

# Create users level0-level19
RUN for i in $(seq 0 19); do \
    useradd -m -s /bin/bash level$i && \
    echo "level$i:level$i" | chpasswd; \
done

# Copy setup scripts
COPY setup-levels.sh /tmp/setup-levels.sh
RUN chmod +x /tmp/setup-levels.sh && /tmp/setup-levels.sh

# Copy documentation
COPY docs/ /home/docs/
RUN chmod -R 755 /home/docs

# Expose SSH port
EXPOSE 22

# Start SSH service
CMD ["/usr/sbin/sshd", "-D"]
