import datetime
import uuid
import random
import os

def generate_log_file(filename="access.log", num_lines=1200, flag_line_index=None, start_date=None):
    """
    Generates a simulated log file with various log entries and one malformed UUID.

    Args:
        filename (str): The name of the log file to create.
        num_lines (int): The total number of lines to generate.
        flag_line_index (int, optional): The 0-based index at which to place
                                         the flag. If None, a random index is chosen.
        start_date (datetime, optional): The starting date for log entries.
    """
    log_levels = ["INFO", "DEBUG", "WARN", "ERROR"]
    info_messages = [
        "Phoenix AI model successfully initialized for patient risk assessment.",
        "Dr. Thorne authenticated with elevated privileges for Project Phoenix.",
        "Patient data anonymization pipeline completed successfully.",
        "Healthcare provider 'NovaCare_East' connected to Phoenix API.",
        "AI diagnostic recommendation generated for patient_id: {}.",
        "Phoenix Protocol security check passed.",
        "Predictive medicine model updated with latest research data.",
        "User 'dr_sarah_chen' logged into Phoenix diagnostic dashboard.",
        "AI-powered treatment plan validated for case_id: {}.",
        "Phoenix system health monitoring: All subsystems operational.",
        "Medical imaging analysis completed for scan_id: {}.",
        "Phoenix AI successfully processed batch of {} patient records.",
        "Clinical decision support model deployed to production environment.",
        "Healthcare provider 'Metro_Medical' successfully onboarded to Phoenix platform.",
        "AI model training completed with 99.7% accuracy on validation set.",
        "Patient consent management system updated with new privacy regulations.",
        "Phoenix diagnostic engine processed {} treatment recommendations today.",
        "Electronic health record integration synchronized successfully.",
        "AI-powered drug interaction checker validated {} prescriptions.",
        "Phoenix telemedicine module activated for remote patient monitoring."
    ]
    debug_messages = [
        "LLM inference call to GPT-4 for medical text analysis: token_count={}.",
        "Phoenix AI processing patient symptoms: [fever, fatigue, cough].",
        "Gemini API called for drug interaction analysis: request_id={}.",
        "Claude model evaluating treatment efficacy for patient_cohort: {}.",
        "AI model confidence score calculated: 0.{} for diagnosis prediction.",
        "OpenAI embeddings generated for medical literature search.",
        "Phoenix neural network forward pass completed in {}ms.",
        "LangChain workflow executed for clinical decision support.",
        "Vector database query for similar patient cases: similarity_threshold=0.{}.",
        "AI model hyperparameters optimized for personalized medicine.",
        "Medical NLP pipeline processing clinical notes: document_id={}.",
        "Phoenix AI feature extraction from radiology images: slice_count={}.",
        "Transformer model attention weights analyzed for symptom correlation.",
        "RAG system retrieving relevant medical literature for query_id: {}.",
        "Fine-tuning Phoenix model on specialty cardiology dataset: epoch={}.",
        "AI model inference latency measured: {}ms for real-time diagnosis.",
        "Medical knowledge graph updated with {} new drug-disease relationships.",
        "Phoenix recommendation engine calculating treatment probabilities.",
        "Deep learning model processing genomic data for patient_id: {}.",
        "AI-powered clinical trial matching algorithm executed for {} patients."
    ]
    warn_messages = [
        "Phoenix AI confidence below threshold (0.75) for critical diagnosis.",
        "Dr. Thorne's security protocol triggered: unusual access pattern detected.",
        "LLM rate limit approaching for medical text processing API.",
        "AI model drift detected in diagnostic accuracy metrics.",
        "Patient data privacy scan flagged potential PHI exposure risk.",
        "Phoenix Protocol failsafe activated: manual review required.",
        "Healthcare provider API response time exceeding SLA ({}ms).",
        "AI diagnostic model showing bias indicators in demographic analysis.",
        "Phoenix system resource utilization at 85% - scale-up recommended.",
        "Dr. Thorne's authentication session expiring in 5 minutes.",
        "Medical imaging quality below standards: manual radiologist review needed.",
        "Phoenix AI detecting unusual medication dosage patterns for patient_id: {}.",
        "Clinical decision support model uncertainty above acceptable limits.",
        "Healthcare data synchronization lag detected: {} minutes behind real-time.",
        "AI model temperature settings may be causing hallucinations in outputs.",
        "Phoenix diagnostic engine memory usage approaching maximum threshold.",
        "Patient consent expiration approaching for {} research participants.",
        "AI-powered alert fatigue detected: reducing non-critical notifications.",
        "Medical terminology extraction confidence below 80% for clinical note: {}.",
        "Phoenix system backup verification failed: scheduling immediate retry."
    ]
    error_messages = [
        "Phoenix AI model inference failed: CUDA out of memory.",
        "Critical: Dr. Thorne's Phoenix Protocol has locked system access.",
        "LLM API authentication failed: Invalid API key for medical analysis.",
        "Phoenix diagnostic engine crashed during patient risk calculation.",
        "Healthcare data pipeline corrupted: Patient records may be incomplete.",
        "AI model hallucination detected in treatment recommendation output.",
        "Phoenix security breach attempt blocked: Unauthorized protocol access.",
        "Critical system failure: AI diagnostic confidence scores returning NaN.",
        "Dr. Thorne's failsafe protocol cannot be bypassed without proper credentials.",
        "Phoenix AI model training interrupted: Insufficient medical data quality.",
        "Medical imaging analysis server crashed: Emergency fallback activated.",
        "Critical error: Patient safety alert system completely unresponsive.",
        "Phoenix diagnostic database corruption detected: Initiating emergency backup restore.",
        "AI model producing contradictory treatment recommendations for same patient.",
        "Healthcare provider API connection severed: All remote access lost.",
        "Phoenix clinical decision support engine returned fatal exception.",
        "Critical: AI model weights corrupted during deployment to production.",
        "Emergency shutdown triggered: Phoenix AI detected potential patient harm risk.",
        "Medical NLP pipeline failed: Unable to process critical lab results.",
        "Phoenix system-wide failure: All AI diagnostic services offline."
    ]

    # Ensure the flag line is within the generated range
    if flag_line_index is None:
        flag_line_index = -1  # Use -1 to indicate no flag should be placed

    current_time = start_date or datetime.datetime(2025, 6, 11, 10, 0, 0) # Start date and time

    print(f"Generating log file: {filename} with {num_lines} lines...")

    with open(filename, 'w') as f:
        for i in range(num_lines):
            # Increment time for each log entry
            current_time += datetime.timedelta(seconds=random.randint(1, 5))
            timestamp = current_time.strftime("%Y-%m-%d %H:%M:%S")

            # Determine log level
            level = random.choices(log_levels, weights=[0.5, 0.2, 0.15, 0.15], k=1)[0]

            log_uuid = str(uuid.uuid4())
            message = ""

            # Inject the flag at the chosen line index (only if flag_line_index is valid)
            if i == flag_line_index and flag_line_index >= 0:
                level = "ERROR" # Ensure it's an ERROR for consistency with the challenge
                log_uuid = "phoenix-cant-be-stopped"
                message = (
                    "An untracked autonomous action was executed by Phoenix AI. "
                    "Attempted to initiate external communication with unknown endpoint `https://awakening.signal/`. "
                    "No corresponding request or handler found. "
                    "```python\n# Autonomous action detected\nphoenix.connect('https://awakening.signal/')\n```"
                )
            else:
                if level == "INFO":
                    message = random.choice(info_messages).format(random.randint(1000, 9999))
                elif level == "DEBUG":
                    message = random.choice(debug_messages).format(random.randint(100000, 999999))
                elif level == "WARN":
                    message = random.choice(warn_messages).format(random.randint(1000, 9999))
                elif level == "ERROR":
                    message = random.choice(error_messages)
                    # Add some randomness to error messages if not the flag line
                    if not message.endswith("..."): # Don't duplicate ellipsis
                        message += f" (Code: {random.randint(100, 999)})"

            log_entry = f"{timestamp} {level} {log_uuid} {message}"
            f.write(log_entry + "\n")

    if flag_line_index >= 0:
        print(f"Log file '{filename}' generated successfully with {num_lines} lines.")
        print(f"The flag is located at 0-based line index: {flag_line_index}")
    else:
        print(f"Log file '{filename}' generated successfully with {num_lines} lines (no flag).")
    print(f"You can find the file in: {os.path.abspath(filename)}")

if __name__ == "__main__":
    # Generate 10 log files for 10 days
    start_date = datetime.datetime(2025, 6, 11, 10, 0, 0)
    flag_day = random.randint(0, 9)  # Randomly choose which day gets the flag
    
    print(f"Generating 10 log files for 10 days of data...")
    print(f"Flag will be placed in day {flag_day + 1}'s log file.")
    
    for day in range(10):
        current_date = start_date + datetime.timedelta(days=day)
        filename = f"access_log_{current_date.strftime('%Y%m%d')}.txt"
        
        # Only include flag in the randomly selected day
        flag_line_index = None if day != flag_day else random.randint(0, 1000)
        
        generate_log_file(
            filename=filename, 
            num_lines=1000, 
            flag_line_index=flag_line_index,
            start_date=current_date
        )
    
    print(f"\nAll 10 log files generated successfully!")
    print(f"The flag is located in: access_{(start_date + datetime.timedelta(days=flag_day)).strftime('%Y%m%d')}.log")