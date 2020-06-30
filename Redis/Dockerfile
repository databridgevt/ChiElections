FROM redis:5.0.8-alpine

HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 CMD [ "./redis_healthcheck.sh" ]