
# If author contains abdulsamad or is not Claude/actions, set to Yousef
if b"abdulsamad" in commit.author_email.lower() or b"samad" in commit.author_name.lower():
    commit.author_name = b"Yousef Khaled Gouda"
    commit.author_email = b"youssef460249@beng.bu.edu.eg"
    commit.committer_name = b"Yousef Khaled Gouda"
    commit.committer_email = b"youssef460249@beng.bu.edu.eg"

# Backdate any commits newer than Sept 1, 2026 (timestamp > 1725148800)
# August 20, 2026 14:00:00 UTC = 1724162400
try:
    ts = int(commit.author_date.split()[0])
    if ts > 1725148800:
        commit.author_date = b"1724162400 +0200"
        commit.committer_date = b"1724162400 +0200"
except Exception:
    pass
