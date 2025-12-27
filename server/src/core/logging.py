import structlog
import logging
import sys

def setup_logging():
    """
    Configure structured logging with JSON output format.
    This produces clean, machine-parseable logs ideal for production.
    """
    # Suppress default uvicorn access logs to avoid duplication
    logging.getLogger("uvicorn.access").disabled = True
    
    logging.basicConfig(
        format="%(message)s",
        stream=sys.stdout,
        level=logging.INFO,
    )

    structlog.configure(
        processors=[
            structlog.contextvars.merge_contextvars,
            structlog.processors.add_log_level,
            structlog.processors.StackInfoRenderer(),
            structlog.dev.set_exc_info,
            structlog.processors.TimeStamper(fmt="iso"),
            structlog.processors.JSONRenderer(), # Clean JSON output
        ],
        logger_factory=structlog.PrintLoggerFactory(),
        cache_logger_on_first_use=True,
    )
